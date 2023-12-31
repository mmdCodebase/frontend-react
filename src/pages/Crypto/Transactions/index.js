import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllTransactions from './AllTransactions';
import MetaTags from 'react-meta-tags';
import Widgets from './Widgets';

const Transactions = () => {
    document.title = "Transactions | Smart Shutter Website";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title="Transactions" pageTitle="Crypto" />
                    <Row>
                        <Widgets />
                    </Row>
                    <AllTransactions />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Transactions;