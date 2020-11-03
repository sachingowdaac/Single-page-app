import React from 'react';
import Layout from '../Layout/layout';

const Contact = () => (
  <Layout>
    <h1 className="text-2xl text-center">Contact Me</h1>
    <form onSubmit>
      <div className="flex flex-col w-1/2 m-auto my-5">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="flex flex-col w-1/2 m-auto my-5">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="flex flex-col w-1/2 m-auto my-5">
        <label>Message</label>
        <textarea />
      </div>
      <button
        type="submit"
        className="bg-white m-auto flex flex-col p-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  </Layout>
);

export default Contact;
