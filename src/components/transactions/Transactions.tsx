import React from "react";
import TranslucentCard from "../common/TranslucentCard";
import { Transaction } from "../../models/Transaction";
import {
  Badge,
  Button,
  Col,
  Collapse,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";

import "./Transactions.css";
import { Category, CategoryType } from "../../models/Category";
import { CgAdd, CgRemove } from "react-icons/all";
import { Account } from "../../models/Account";

type TransactionsProps = {
  transactions?: Transaction[];
  categories?: Category[];
  accounts?: Account[];
};

type TransactionsState = {
  addTransaction: boolean;
};

export default class Transactions extends React.Component<
  TransactionsProps,
  TransactionsState
> {
  constructor(props: TransactionsProps) {
    super(props);
    this.state = {
      addTransaction: false,
    };
  }

  render() {
    return (
      <TranslucentCard className={"p-2"}>
        <Row className={" p-0 m-0"}>
          <Col as={"h5"} className={"fw-bolder p-1"}>
            Transactions
          </Col>
          <Col xs={1}>
            {!this.state.addTransaction && (
              <CgAdd
                color={"darkgreen"}
                size={"20"}
                className={"cursor-pointer"}
                onClick={() => this.setState({ addTransaction: true })}
              />
            )}
            {this.state.addTransaction && (
              <CgRemove
                color={"darkred"}
                size={"20"}
                className={"cursor-pointer"}
                onClick={() => this.setState({ addTransaction: false })}
              />
            )}
          </Col>
        </Row>
        <Collapse in={this.state.addTransaction}>
          <div>
            <TranslucentCard className={"mt-2 "}>
              <Form>
                <Row>
                  <Col>
                    <InputGroup className="mb-3" size={"sm"}>
                      <InputGroup.Text>Account</InputGroup.Text>
                      <Form.Select
                        size={"sm"}
                        className={"shadow-none"}
                        defaultValue={""}
                        required
                      >
                        <option />
                        {this.props.accounts?.map((account) => (
                          <option key={account.id}>{account.name}</option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3" size={"sm"}>
                      <InputGroup.Text>Category</InputGroup.Text>
                      <Form.Select
                        size={"sm"}
                        className={"shadow-none"}
                        defaultValue={""}
                        required
                      >
                        <option />
                        {this.props.categories?.map((category) => (
                          <option key={category.id}>{category.name}</option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup size={"sm"}>
                      <InputGroup.Text>Transaction Date</InputGroup.Text>
                      <Form.Control
                        type={"date"}
                        size={"sm"}
                        className={"shadow-none"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className={"mt-2"}>
                  <Col sm={4}>
                    <InputGroup size={"sm"}>
                      <InputGroup.Text>₹</InputGroup.Text>
                      <Form.Control
                        type={"number"}
                        placeholder="Amount"
                        size={"sm"}
                        className={"shadow-none"}
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup size={"sm"}>
                      <InputGroup.Text>Note</InputGroup.Text>
                      <Form.Control
                        type={"text"}
                        placeholder="Add a note..."
                        className={"shadow-none"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <div className={"text-end mt-4"}>
                  <Button size={"sm"} variant={"success"}>
                    Add
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"outline-danger"}
                    className={"ms-2"}
                    onClick={() => this.setState({ addTransaction: false })}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </TranslucentCard>
          </div>
        </Collapse>

        <Table responsive borderless hover className={"text-center"}>
          <thead className={"border-bottom"}>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Account</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactions?.map((transaction) => {
              return (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                />
              );
            })}
          </tbody>
        </Table>
      </TranslucentCard>
    );
  }
}

class TransactionRow extends React.Component<{ transaction: Transaction }, {}> {
  render() {
    const tr = this.props.transaction;
    const amountFormatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return (
      <tr className={"transaction-row"}>
        <td>{tr.id}</td>
        <td>
          <Badge
            pill
            bg={
              tr.category.categoryType === CategoryType.INCOME
                ? "success"
                : "danger"
            }
          >
            {tr.category.categoryType}
          </Badge>
        </td>
        <td>{tr.account.name}</td>
        <td>{tr.category.name}</td>
        <td>{amountFormatter.format(tr.amount)}</td>
        <td>{tr.transactionDate}</td>
      </tr>
    );
  }
}
