import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {EMAIL_GUESTS} from '../utils/queries'

function EmailButton () {

    const [sendEmail, {data}] = useLazyQuery(EMAIL_GUESTS)
    useEffect(() => {
        if (data) {
            console.log(data)
          alert("emails sent successfully!")
        }
      }, [data]);

    return (
        <div>
            <button onClick={() => sendEmail({ variables: {id : "" }})}>Email my invite!</button>
        </div>
    )
}

export default EmailButton;

