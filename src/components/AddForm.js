import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';


function AddForm(props) {

  const [showForm, setShowForm] = useState(false)
  const {handleAddForm} = props;

  const onFinish = (values) => {
    console.log('Success:', values);
    handleAddForm(values)
    setShowForm(false)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function showFormClick(){
    setShowForm(true)
  }

  return (
    <>
    {
      !showForm && (
        <Button type="primary" onClick={showFormClick}>Show Form</Button>
      )
    }
    {
      showForm && (
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please enter Book name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: 'Please nter price!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
      
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      )
    }
    </>
   
  )
}

export default AddForm