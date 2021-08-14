import React from 'react';
import { Modal, Form, Input, Select, Rate } from 'antd';

const FilmAddFrm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  return (
    <Modal
      visible={visible}
      title="Create new firlm"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="Movie_Name"
          label="Movie Name"
          rules={[
            {
              required: true,
              message: 'Please input the Movie Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input the Description!',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="Realease_Date"
          label="Realease Date"
          rules={[
            {
              required: true,
              message: 'Please input the Realease Date!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="Rating" label="Rating">
            <Rate />
        </Form.Item>

        <Form.Item
          name="Ticket_Price"
          label="Ticket Price"
          rules={[
            {
              required: true,
              message: 'Please input the Ticket Price!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
            name="Country"
            label="Country"
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please select your country!',
            },
            ]}
        >
            <Select placeholder="Please select a country">
            <Option value="china">UAE</Option>
            <Option value="usa">U.S.A</Option>
            </Select>
        </Form.Item>
        <Form.Item
          name="Photo"
          label="Photo"
          rules={[
            {
              required: true,
              message: 'Please input the Photo!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Genre"
          label="Genre"
          rules={[
            {
              required: true,
              message: 'Please input the Genre!',
            },
          ]}
        >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
};

// const CollectionsPage = () => {
//   const [visible, setVisible] = useState(false);

//   const onCreate = (values) => {
//     console.log('Received values of form: ', values);
//     setVisible(false);
//   };

//   return (
//     <div>
      
//       <FilmAddFrm
//         visible={visible}
//         onCreate={onCreate}
//         onCancel={() => {
//           setVisible(false);
//         }}
//       />
//     </div>
//   );
// };

export default FilmAddFrm;