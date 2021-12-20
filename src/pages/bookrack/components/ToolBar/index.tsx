import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  changeEditState,
  selectEditState,
  selectDeleteList,
  deleteBooks,
  checkAll,
} from '@/stores/bookrackStore';
import { Button, ToolBarContainer, EditContainer } from './styled';

const { confirm } = Modal;

const ToolBar: FC = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectEditState);
  const deleteList = useSelector(selectDeleteList);
  const { length } = deleteList;

  const onChangeState = () => {
    dispatch(changeEditState());
  };

  const onDelete = () => {
    confirm({
      title: '确定要删除吗？',
      icon: <ExclamationCircleOutlined />,
      content: '只会删除书架记录',
      okText: '确认删除',
      cancelText: '取消',
      onOk() {
        dispatch(deleteBooks());
      },
    });
  };

  const onCheckAll = () => {
    dispatch(checkAll());
  };

  return (
    <ToolBarContainer>
      <Button type='primary' shape='round' onClick={onChangeState}>
        {isEditing ? '完成' : '编辑'}
      </Button>
      {
        isEditing
        && (
        <EditContainer>
          <Button
            type='primary'
            shape='round'
            style={{ marginRight: '20px' }}
            onClick={onCheckAll}
          >
            全选
          </Button>
          <Button type='primary' shape='round' danger onClick={onDelete}>
            删除(
            {length}
            本)
          </Button>
        </EditContainer>
        )
      }
    </ToolBarContainer>
  );
};

export default ToolBar;
