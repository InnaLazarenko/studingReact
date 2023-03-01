import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";

// our-domain.com/

/* const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://cdn.vox-cdn.com/thumbor/zaTP0PuATfKbgW3LjEXZBbZIV6s=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22250976/acastro_210121_1777_google_0001.jpg",
    title: "first image",
    address: "Some address 5, 147",
    discription: "dddd",
  },
  {
    id: "m2",
    image:
      "https://cdn.vox-cdn.com/thumbor/zaTP0PuATfKbgW3LjEXZBbZIV6s=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22250976/acastro_210121_1777_google_0001.jpg",
    title: "2d image",
    address: "Some address 5, 147",
    discription: "dddd",
  },
  {
    id: "m3",
    image:
      "https://cdn.vox-cdn.com/thumbor/zaTP0PuATfKbgW3LjEXZBbZIV6s=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22250976/acastro_210121_1777_google_0001.jpg",
    title: "3d image",
    address: "Some address 5, 147",
    discription: "dddd",
  },
];
 */
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  //fetch('api/meetups')
  const client = await MongoClient.connect(
    "mongodb+srv://lazarenkofreelance:nR8ihwQp6JVzMvd6@cluster0.njlhwhu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 10, //seconds wait to refetch
  };
}

/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export default HomePage;
