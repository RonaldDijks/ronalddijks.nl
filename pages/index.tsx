import React from "react";
import Image from "next/image";
import imageSource from "../assets/me.jpg";
import Header from "../components/Header";
import Link from "../components/Link";
import { InferGetServerSidePropsType } from "next";
import { getLastPlayed } from "../lib/spotify/getLastPlayed";

export const getServerSideProps = async () => {
  const track = await getLastPlayed();
  return {
    props: {
      track,
    },
  };
};

type IndexPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const IndexPage: React.FC<IndexPageProps> = ({ track }) => {
  return (
    <div>
      <Header lastListened={{ track: track ?? undefined }} />
      <div className="max-w-3xl mx-auto">
        <section className="pt-40">
          <div className="flex">
            <div className="max-w-xs">
              <Image
                className="rounded-lg"
                src={imageSource}
                alt="Headshot of Ronald Dijks"
              />
            </div>
            <div className="ml-8">
              <h1 className="text-2xl font-bold mb-2">Hi, I&apos;m Ronald.</h1>
              <p className="mb-4">
                I&apos;m a software developer from Amsterdam. I work at{" "}
                <Link href="https://www.crisp.nl/">Crisp</Link> as a fullstack
                developer, and I run{" "}
                <Link href="https://essentialaud.io/">Essential Audio</Link>{" "}
                with two of my friends.
              </p>
              <p className="mb-4">
                You can find me on{" "}
                <Link href="https://github.com/RonaldDijks">GitHub</Link>,{" "}
                <Link href="https://www.linkedin.com/in/ronalddijks/">
                  LinkedIn
                </Link>{" "}
                and <Link href="https://twitter.com/Ronald_Dijks">Twitter</Link>
                .
              </p>
              <p className="mb-4">
                I&apos;m also available for hire as a fullstack freelancer, if
                you have any fun projects, shoot me a message!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexPage;
