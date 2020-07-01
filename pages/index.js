import Head from 'next/head'

const name = "Muckle Studios"
const desc = "UX design specialists, combining design and psychology to enhance the users experience."

export default function Home() {
  return (
    <div className={`h-full flex flex-col`}>
      <Head>
        <title>Muckle Studios</title>
        <meta name="description" content={desc}/>
        <meta property="og:title" content={name}/>
        <meta property="og:description" content="desc"/>
        <meta property="og:image" content="https://mucklestudios.com/img/facebook.png"/>
        <meta property="og:url" content="https://mucklestudios.com"/>
        <meta name="twitter:title" content={name}/>
        <meta name="twitter:description" content={desc}/>
        <meta name="twitter:image" content="https://mucklestudios.com/img/twitter.png"/>
        <meta name="twitter:card" content="https://mucklestudios.com/img/twitter.png"/>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-171128000-1', 'auto');
            ga('send', 'pageview');`
          }}
        ></script>
      </Head>

      <main className={`p-4 md:ml-8 md:mt-8 flex flex-col`}>
        <div className="border-b-2 border-white border-solid pb-4 mb-4">
          <img src="/img/logo.svg"/>
        </div>
        <div className={`about`}>
          <p>We are a team of user experience design specialists
          who work collaboratively with organisations to
          significantly improve the way customers experience
          their products and services.</p>

          <p>We help to create solutions that meet the needs of
          both the organisation and their <s>users</s> people by combining
          strategic research with our experience in design and
          psychology.</p>

          <p>Our approach provides evidence to not only enhance
          the customer experience but to fuel innovation and mitigate risk.
          We pride ourselves on producing actionable insights
          along with being relentlessly curious.</p>
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex flex-col mb-2">
            <span className={`text-xl font-bold`}>Kevin Sinclair</span>
            <span className={``}>Product / UX Designer</span>
          </div>
          <div className="flex flex-col mb-2">
            <span className={`text-xl font-bold`}>Stephanie Crowe</span>
            <span>Design Psychologist</span>
          </div>
        </div>

        <div className="w-2/4 h-20 bg-contain bg-no-repeat" style={{ backgroundImage: "url(/img/bps.svg)" }}/>
      </main>

      <footer className={`px-4 pb-4 md:ml-8 md:mr-8`}>
        <div className={`pt-4 border-t-2 border-white border-solid `}>
          <h2>Muckle Studios Ltd</h2>
          <h2><a href="mailto:hello@mucklestudios.com">hello@mucklestudios.com</a></h2>
        </div>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #fff;
          font-size: 18px;
          line-height: 1.3;
          background-color: rgb(53, 72, 255);
          height: 100vh;
          background-image: url('/img/full.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: 56% top;
        }

        h2 {
          font-size: 1.75rem;
          font-weight: bold;
        }

        * {
          box-sizing: border-box;
        }

        .about p {
          margin-bottom: 1rem;
          text-align: justify;
        }

        .email {
          font-size: 7.5vw;
          font-weight: bold;
        }

        main {
          max-width: 500px;
          background-color: rgba(53, 72, 255, 0.5);
        }

        footer {
          background-color: rgba(53, 72, 255, 0.5);
        }

        @media (min-width: 426px) {
          .email {
            font-size: 2rem;
          }
          main, footer {
            background-color: transparent;
          }
        }

      `}</style>
    </div>
  )
}
