import Head from "next/head"
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [workes, setWorkes] = useState<Array<any>>();
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("http://localhost:4000/api/workes").then(
          (res) => res.json()
        );
        setWorkes(data);
      } catch (err) {
        console.log(err);
        alert("server got a error !");
      }
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div>
            <section>
              <header>
                <article>
                  <h2>รายการนิมนต์ วันนี้</h2>
                </article>
              </header>
            </section>

            <section className="grid place-items-center">
              <table className="table-auto w-4/5 border-slate-500">
                <thead>
                  <tr className="">
                    <th className="text-start">ที่</th>
                    <th className="text-start ">ชื่อ</th>
                    <th className="text-start">พระ</th>
                    <th className="text-start">เวลา</th>
                  </tr>
                </thead>
                <tbody>
                  {!workes
                    ? null
                    : workes.map((item, index) => {
                        return (
                          <Usertablerow
                            key={index}
                            index={index}
                            firstName={item.user.first_name}
                            lastName={item.user.last_name}
                            date_time={item.date_time}
                            monk={item.monk}
                          />
                        );
                      })}
                  {!workes
                    ? null
                    : workes.map((item, index) => {
                        return (
                          <Usertablerow
                            key={index}
                            index={index}
                            firstName={item.user.first_name}
                            lastName={item.user.last_name}
                            date_time={item.date_time}
                            monk={item.monk}
                          />
                        );
                      })}
                  {!workes
                    ? null
                    : workes.map((item, index) => {
                        return (
                          <Usertablerow
                            key={index}
                            index={index}
                            firstName={item.user.first_name}
                            lastName={item.user.last_name}
                            date_time={item.date_time}
                            monk={item.monk}
                          />
                        );
                      })}
                </tbody>
              </table>
            </section>

            <section></section>
          </div>
        </Layout>
      </main>
    </>
  );
}

interface userTable {
  index: number;
  firstName: string;
  lastName: string;
  date_time: Date;
  monk: number;
}

const Usertablerow = ({
  index,
  firstName,
  lastName,
  date_time,
  monk,
}: userTable) => {
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{firstName}</td>
        <td>{monk}</td>
        <td>{new Date(date_time).getDate()}</td>
      </tr>
    </>
  );
};
