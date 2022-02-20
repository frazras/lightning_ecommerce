import React from "react";
import LNPayment from "../components/LNPayment";
import classes from "../styles/invoice.module.scss";

const LNInvoice = () => {
    return <div className={classes.lnInvoice}>
        <h1>Lightning ⚡️ Invoice</h1>
        <h2>Scan the QR Code to Pay.</h2>
        <LNPayment invoice="lnbc250n1p3py7smpp5cqkf05mwk0he0d4ph2lk0keqpdujlnq8ddv89jmcwsuv7aplggesdqjfehkge22wvs9getnwscqzpgxqyz5vqrzjq29gu57hp0qwk76kvz2rtqh3pdlad3e8579dsxd634zadf3cgvkyjzhm4vqq5xqqqqqqqgegqqqqphqq9qsp5gu3anhcedpve4qywdpknaw23007ue34fp40chksdnlr6ar86e64q9qyyssqfn86cn79vp0jhxv30ryh6dx30xkr36j0nkhdjahuh3t308w6lrgscy20s3vzgjyxp7hh7jh3ll7n7l60rh7hgvf8wma5qqh9gzu2cncq0kq88n"/>
        <h2>Or Copy the Invoice Below</h2>
        <p>
        lnbc250n1p3py7smpp5cqkf05mwk0he0d4ph2lk0keqpdujlnq8ddv89jmcwsuv7aplggesdqjfehkge22wvs9getnwscqzpgxqyz5vqrzjq29gu57hp0qwk76kvz2rtqh3pdlad3e8579dsxd634zadf3cgvkyjzhm4vqq5xqqqqqqqgegqqqqphqq9qsp5gu3anhcedpve4qywdpknaw23007ue34fp40chksdnlr6ar86e64q9qyyssqfn86cn79vp0jhxv30ryh6dx30xkr36j0nkhdjahuh3t308w6lrgscy20s3vzgjyxp7hh7jh3ll7n7l60rh7hgvf8wma5qqh9gzu2cncq0kq88n
        </p>
    </div>;
};

export default LNInvoice;
