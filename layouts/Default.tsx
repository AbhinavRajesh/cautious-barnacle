import Head from "next/head";

interface IDefaultLayout {
  title: string;
  description: string;
  container: boolean;
  children: React.ReactNode;
  className?: string;
}

const DefaultLayout = ({
  title,
  description,
  container = true,
  children,
  className,
}: IDefaultLayout): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={className}>
        <main
          className={`${
            container ? "max-w-[1440px]" : ""
          } mx-auto w-full ${className}`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default DefaultLayout;
