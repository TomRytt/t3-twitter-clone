import type { NextPage, GetStaticPropsContext } from "next";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import { ssgHelper } from "~/server/api/ssgHelper";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <h1>TBC</h1>
        {/* <title>{`Twitter Clone ${user.name} `}</title> */}
      </Head>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;

  if (id == null) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  const ssg = ssgHelper();

  // TODO: Continue at 1:57 on the video and create the profile router
  // ssg.profile
}

export default ProfilePage;
