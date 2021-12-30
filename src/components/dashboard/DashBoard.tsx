import React from "react";
import Accounts from "../accounts/Accounts";
import { Col, Row } from "react-bootstrap";
import Categories from "../categories/Categories";
import Transactions from "../transactions/Transactions";
import axios from "axios";
import { Category } from "../../models/Category";
import { Transaction } from "../../models/Transaction";
import { Account } from "../../models/Account";

interface DashBoardState {
  categories?: Category[];
  transactions?: Transaction[];
  accounts?: Account[];
}

export default class DashBoard extends React.Component<{}, DashBoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      categories: undefined,
      transactions: undefined,
      accounts: undefined,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/categories").then((result) => {
      this.setState({ categories: result.data });
    });
    axios.get("http://localhost:8080/transactions").then((result) => {
      this.setState({ transactions: result.data });
    });
    axios.get("http://localhost:8080/accounts").then((result) => {
      this.setState({ accounts: result.data });
    });
  }

  render() {
    return (
      <div className={"p-2 p-lg-4"}>
        <Row>
          <Col md={8}>
            <Transactions {...this.state} />
          </Col>
          <Col md={4} className={"mt-4 mt-lg-0"}>
            <Accounts accounts={this.state.accounts} />
            <Categories categories={this.state.categories} />
          </Col>
        </Row>
      </div>
    );
  }
}
