import Layout from "@/components/layout/Layout";
import FormLabel from "@/components/layout/form/FormLabel";
import Head from "next/head";
import React, { useRef, useState } from "react";

type Props = {};

function Login({}: Props) {
  const usernameRef: any = useRef("");
  const passwordRef: any = useRef("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    let loginForm = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    // login for get Token from server api endpoint
    (async () => {
      const endpoint = "http://localhost:4000/api/auth/login";

      try {
        const loginState = await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer",
          body: JSON.stringify(loginForm),
        })

        console.log(loginState);
      } catch (error) {
        console.log(error);
        alert("got error on login");
      }
    })();
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className="grid place-items-center mt-20">
          <form className="" onSubmit={submitForm}>
            <div className="grid grid-flow-row gap-y-4">
              <FormLabel addClass="gep-x-3">
                <p className={`  transition-transform duration-150`}>
                  userName
                </p>
                <input ref={usernameRef} className="rounded-md" type="text" />
              </FormLabel>
              <FormLabel>
                <p>password</p>
                <input ref={passwordRef} className="rounded-md" type="text" />
              </FormLabel>
              <button>df</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Login;
