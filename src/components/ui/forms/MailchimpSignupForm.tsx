'use client'

import React from 'react'
import {useEffect, useState} from 'react'

import { useRouter } from 'next/navigation'

import { gql, useMutation } from "@apollo/client";

const UPDATE_INFO = gql`
  mutation result($firstName: String!, $lastName: String!, $Email: String!) {
    updateInfo(firstName: $firstName, lastName: $lastName, email: $Email) {
      success
      error
    }
  }
`;

interface IMailChimpInput {
  label: string
  placeholder: string
  value: string
  _onChange: (params: any) => any
}

export const MailchimpInput = ({label, placeholder, value, _onChange}: IMailChimpInput) => {
  return (
    <>
    <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <input
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          name={label}
          type="text"
          required
          onChange={_onChange}
          value={value}
        />
    </>
  )
}


interface IMailChimpSignupForm {
  // onFormLoading: (params: any) => any | undefined
  // onFormData: (params: any) => any | undefined
}

export const MailchimpSignupForm = ({/* onFormLoading, onFormData */}: IMailChimpSignupForm) => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [btn, setBtn ] = useState(false);

  const [error, setError] = useState('');

  const [
    updateUserInfo,
    {
      loading: updateUserInfoLoading,
      error: updateUserInfoError,
      data: updateUserInfoData,
    },

  ] = useMutation(UPDATE_INFO);

  useEffect(() => {
    if(updateUserInfoData?.updateInfo) {
      // setEmail('');
      // setFname('');
      // setLname('');
      const data = JSON.parse(JSON.stringify(updateUserInfoData?.updateInfo));
      if(updateUserInfoData?.updateInfo?.error) {
        data.error = JSON.parse(data.error);
        data.error = JSON.parse(data.error.response.text);
        data.error = data.error.detail;
        data.error = data.error.replace("Use PUT to insert or update list members.","");
        setError(data.error);
      }
      // console.log('Message: ', data);
      // onFormData(data);
    }

  }, [updateUserInfoData]);

  /*
  useEffect(() => {
    if(updateUserInfoLoading){
      onFormLoading(updateUserInfoLoading);
    }
  }, [onFormLoading, updateUserInfoLoading]);
  */

  //state for the updateform error
  const [updateError, setUpdateError] = useState(false);

  //state for the image
  const [date, setDate] = useState("");


  // onUpdateinfo

  const onUpdateInfo = async (event: any) => { // any type is probably not accurate ?
    event.preventDefault();
    await updateUserInfo({
      variables: { firstName: fname, lastName: lname, Email: email },
    });
  };

  const router  = useRouter()

  const navi =()=>{
    if (updateUserInfoData) {
      router.push('/orphanarium')
    }
  }

  // Not sure what this was supposed to do
// useEffect(() => {
//   setBtn('true');

//   setTimeout(()=>{
//     // navi()
//     onFormData({
//       success: false,
//       error: null
//     })
//   },80000);

// }, [updateUserInfoData]);

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center">
        {error !== '' && (
          <div className="bg-zinc-800 text-amber-500 rounded text-xs p-2 m-2 w-3/4">{error}</div>
        ) }
            <form onSubmit={onUpdateInfo} className="space-y-5 p-2">
              <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>

              <div className="customflex flex-col justify-start space-y-3">
                <MailchimpInput label="E-mail" value={email} placeholder="you@plaguepoppets.io" _onChange={(e)=>{setEmail(e.target.value)}} />
                <MailchimpInput label="First Name" value={fname} placeholder="Poppet" _onChange={(e) => setFname(e.target.value)} />
                <MailchimpInput label="Last Name" value={lname} placeholder="McPopperson" _onChange={(e) => setLname(e.target.value)} />
              </div>

              <div className="customflex justify-center">
                <button
                 disabled={updateUserInfoLoading}
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  {updateUserInfoLoading ? error !== '' ? 'ERROR' : 'Loading' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
    </>
  )
}