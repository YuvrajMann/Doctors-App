/*import React, { Component } from 'react'
import TableComponent from '../TableComponent/TableComponent.js';
import './connections.css';
export default class connections extends Component {
   
    render() {
        return (
           <div>
            connections 
           </div>
        )
    }
}
*/
/*
import React from 'react';
import Table from 'react-bootstrap/Table'
  
  
  
export default function TableExample() {
  return (
    <>
  
<h3>Default Variant Small Size Theme Table</h3>
  
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th width="170">Student Name</th>
      <th width="170">Reg.no</th>
      <th width="170">Course</th>
      <th width="870">City Name</th>
      <th width="1950">Percentage</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rakesh</td>
      <td>1123</td>
      <td>CSE</td>
      <td>Mumbai</td>
      <td>86.9%</td>
  
    </tr>
    <tr>
      <td>Jackson</td>
      <td>1124</td>
      <td>ECE</td>
      <td>Hyderabad</td>
      <td>72.4%</td>
  
    </tr>
    <tr>
      <td>Keshav</td>
      <td>1124</td>
      <td>CSE</td>
      <td>Chennai</td>
      <td>88%</td>
  
    </tr>
    <tr>
      <td>Neilesh Jain</td>
      <td>1125</td>
      <td>EEE</td>
      <td>Gwalior</td>
      <td>66.9%</td>
  
    </tr>
    <tr>
      <td>Akbar sheikh</td>
      <td>1126</td>
      <td>Mechanical</td>
      <td>Indore</td>
      <td>96.5%</td>
  
    </tr>
    <tr>
      <td>Sarita</td>
      <td>1127</td>
      <td>CSE</td>
      <td>Delhi</td>
      <td>96.9%</td>
  
    </tr>
  
  </tbody>
</Table>
  
 
    </>
  );
}*/
/*import React from 'react'
import "antd/dist/antd.css";
import { Table } from 'antd';

  
export default function App() {
  
    // Sample Data for the table
    const dataSource = [
        { key: '1', TicketDetails: 'Gourav', Specialist: 'orthologist' },
        { key: '2', TicketDetails: 'Kartik',  Specialist: 'orthologist' },
        { key: '3', TicketDetails: 'Madhu',  Specialist: 'orthologist' },
        { key: '4', TicketDetails: 'Karu',  Specialist: 'orthologist'  },
        { key: '5', TicketDetails: 'Dinesh',  Specialist: 'orthologist'  },
    ];
  
    // Sample Columns data
    const columns = [
        {
            title: 'TicketDetails',
            dataIndex: 'TicketDetails',
            key: 'TicketDetails',
        },
        {
            title: 'Specialist',
            dataIndex: 'Specialist',
            key: 'Specialist',
        },
    ];
  
    return (
        <div style={{
            display: 'block', width: 1500, padding: 50 ,Height : 1000
        }}>
            <h4>Doctors</h4>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}*/
import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from "../TableComponent/TableComponent.js";
import {Skeleton} from "antd";
import "./connections.css";

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      villageData: [],
      loading: false,
    };
  }
  columns = [
    {
      title: "Ticket Details",
      dataIndex: "ticket",
      key: "ticket",
    },
    {
      title: "Specialist",
      dataIndex: "Specialist",
      key: "Specialist",
    },
    
  ];

  fetchVillageList = () => {
    this.setState({ ...this.state, loading: true });
    axiosInstance
      .get(`/doctors`)
      .then((res) => {
        console.log(res.data);
        let response=res.data;
        let vilData=[];
        let n=response.length;
        for(let i=0;i<n;++i){
          vilData.push(
            {
              key: i+1,
              ticket: response[i].user.name,
              Specialist: 'orthologist'
            }
          );
        }
        this.setState({
          ...this.state,
          villageData: vilData,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
        });
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
  };

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.fetchVillageList();
  }

  render() {
    return (
      <div className="connections_wrapper">
        {this.state.loading ? (
          <Skeleton active={true}></Skeleton>
        ) : (
          <>
            <div className="header_c">Patients</div>
            <TableComponent
              dataSource={this.state.villageData}
              columns={this.columns}
            ></TableComponent>
          </>
        )}
      </div>
    );
  }
}

export default Connections;
