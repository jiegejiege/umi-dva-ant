import { Table, Popconfirm, Button, Form, Input, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ProductList = ({ onDelete, products, onAdd }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'deleteAction',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.key)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    }
  ];
const onFinish = values => {
    console.log('success', values)
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
  return (
      <div>
        <Form
        {...layout}
        name="basic"
        initialValues={{
            remember: true,
        }}
        onFinish={(val) => onAdd({...val,key:val.id})}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item
            label="Username"
            name="name"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="id"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            添加
            </Button>
        </Form.Item>
        </Form>
        <Table dataSource={products} columns={columns} />
      </div>
  )
};

export default ProductList;