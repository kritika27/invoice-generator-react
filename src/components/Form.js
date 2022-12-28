import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from "uuid";

export const Form = () => {
    const [canSubmit, setCanSubmit] = useState(false);


    const [invNumber, setInvNumber] = useState(0);
    const [from, setFrom] = useState("");
    const [billTo, setBillTo] = useState("");
    const [shipTo, setShipTo] = useState("");
    const [notes, setNotes] = useState("");
    const [terms, setTerms] = useState("");
    const [payterms, setPayTerms] = useState("");
    const [pnum, setPnum] = useState(0);
    const [amtPaid, setAmtPaid] = useState(0);
    const [list, setList] = useState([]);
    // const [title, setTitle] = useState("");
    // const [error, setError] = useState(null);
     const [subTotal] = useState(100);
    const [total, setTotal] = useState(0);
    const [due, setDue] = useState(0);
    const [date, setDate] = useState();
    const [dueDate, setDueDate] = useState();
    const [discount, setDiscount] = useState(0);
    const [hasDiscount, setHasDiscount] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuidv4(),
            invNumber,
            from,
            billTo,
            shipTo,
            payterms,
            pnum,
            notes,
            terms,
            amtPaid,
            date,
            dueDate,
            discount,
            subTotal,
            total,
        }
        setList([...list, newItem]);

        setInvNumber("");
    }




    useEffect(() => {
        setTotal(subTotal - discount);
        setDue(total - amtPaid);
        if (!hasDiscount && discount !== "0") {
            setDiscount(0);
        }
        if (invNumber && from && billTo) {
            setCanSubmit(true);
        }
    }, [discount, subTotal, total, amtPaid, hasDiscount, invNumber, from, billTo, setCanSubmit])
    return (
        <main>
            <form className="invoice-wrapper" id="my-form">

                <div className="row1">
                    <div className="upload">
                        <p style={{ fontSize: "18px", height: "20px", letterSpacing: "0.8px", color: "#777", fontFamily: "Arial, Helvetica, sans-serif" }}><i className='fa fa-plus'></i> Add Your Logo</p>
                    </div>
                    <div className='invoice'>
                        <h1>INVOICE</h1>
                        <div className="Icon-outside">

                            <i className="fa fa-hashtag fa-sm"></i>
                            <input
                                className='invnumber'
                                value={invNumber}
                                onChange={(e) => setInvNumber(e.target.value)}
                                style={{ direction: "RTL" }}
                                type="text" />

                        </div>

                    </div>
                </div>
                <div className='rows2'>
                    <div className="row2">

                        <textarea
                        className="from"
                            placeholder="Who is this invoice from? (required)"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                        <div className="bill">
                            <div style={{ display: "flex", flexDirection: "column",margin:"10px" }}>
                                <label
                                    style={{ margin: "15px", color: "gray", fontFamily: "Helvetika,sans-serif", fontSize: "14px" }}
                                >Bill To</label>
                                <textarea
                                className="billto"
                                placeholder="Who is this invoice to? (required)"
                                    value={billTo}
                                    onChange={(e) => setBillTo(e.target.value)}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column",margin:"10px" }}>
                                <label
                                    style={{ margin: "15px", color: "gray", fontFamily: "Helvetika,sans-serif", fontSize: "14px" }}
                                >Ship To</label>
                                <textarea 
                                className="billto"
                                placeholder="(optional)"
                                    value={shipTo}
                                    onChange={(e) => setShipTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col2'>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='invnumber1'
                        />

                        <input

                            className='invnumber1'
                            style={{ direction: "RTL" }}

                            type="text"
                            value={payterms}
                            onChange={(e) => setPayTerms(e.target.value)}
                        />
                        <input type="date"
                            className='invnumber1'
                            style={{ direction: "RTL" }}
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <input type="text"
                            className='invnumber1'
                            style={{ direction: "RTL" }}
                            value={pnum}
                            onChange={(e) => setPnum(e.target.value)}
                        />
                    </div>
                </div>
                <div className='row3'>
                    <div>
                        <div className="notes">
                            <label
                                style={{ margin: "15px", color: "gray", fontFamily: "Helvetika,sans-serif", fontSize: "14px" }}>Notes</label>
                            <textarea value={notes}
                            className="note"
                                placeholder="Notes - any relevant information not already covered"
                                onChange={(e) => setNotes(e.target.value)}
                            />
                            <label style={{ margin: "15px", color: "gray", fontFamily: "Helvetika,sans-serif", fontSize: "14px" }}>Terms</label>
                            <textarea value={terms}
                            className="note"
                                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                                onChange={(e) => setTerms(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col3'>
                        <p>Subtotal ${subTotal}</p>
                        {!hasDiscount && <div style={{ display: "flex", color: "#009E74", fontWeight: "bold" }}>
                            <p onClick={() => setHasDiscount(!hasDiscount)} style={{ cursor: "pointer" }}>+ Discount</p>
                        </div>}
                        {
                            hasDiscount && <div><input type="text" value={discount}
                                className='invnumber1'
                                style={{ direction: "RTL" }}
                                onChange={(e) => setDiscount(e.target.value)}
                            />

                                <i
                                    onClick={
                                        () => setHasDiscount(!hasDiscount)
                                    }
                                    className="fa fa-close"></i></div>
                        }
                        <p>Total ${total}</p>

                        <div className="Icon-dollar">


                            <input
                                className='invnumber2'
                                value={amtPaid}
                                onChange={(e) => setAmtPaid(e.target.value)}


                                type="number" />

                        </div>
                        <p>Balance Due ${due}</p>


                    </div>
                </div>

            </form>


            {canSubmit && <div className='download' onClick={handleSubmit} form="my-form">
                <button
                    className="btn1"
                    >Send Invoice</button>
            </div>}
            {!canSubmit && <div className='download'>
                <button
                    disabled
                    className="btn-disabled"
                    >Send Invoice</button>
            </div>}

        </main>
    )
}
