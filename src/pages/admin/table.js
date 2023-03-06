// import { Space, Table, Tag } from "antd";
// const { Column, ColumnGroup } = Table;
// const data = [
//   {
//     key: "1",
//     firstName: "John",
//     lastName: "Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     firstName: "Jim",
//     lastName: "Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     firstName: "Joe",
//     lastName: "Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
// const App = () => (
//   <Table dataSource={data}>
//     <ColumnGroup title="Name">
//       <Column title="First Name" dataIndex="firstName" key="firstName" />
//       <Column title="Last Name" dataIndex="lastName" key="lastName" />
//     </ColumnGroup>
//     <Column title="Age" dataIndex="age" key="age" />
//     <Column title="Address" dataIndex="address" key="address" />
//     <Column
//       title="Tags"
//       dataIndex="tags"
//       key="tags"
//       render={(tags) => (
//         <>
//           {tags.map((tag) => (
//             <Tag color="blue" key={tag}>
//               {tag}
//             </Tag>
//           ))}
//         </>
//       )}
//     />
//     <Column
//       title="Action"
//       key="action"
//       render={(_, record) => (
//         <Space size="middle">
//           <a>Invite {record.lastName}</a>
//           <a>Delete</a>
//         </Space>
//       )}
//     />
//   </Table>
// );
// export default App;

import { Divider, Radio, Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const App = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default App;
