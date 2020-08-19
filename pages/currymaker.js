import Link from 'next/link'
const currymaker= () => {
    return (
        <div>
            <style>
                {`
                button{
                    font-size:15px;
                    margin-left:10px;
                }
                h1{
                    margin: 0;
                     font-size: 50px;
                     text-align:center;
                }
                p{
                    text-align:center;
                    font-size:25px;
                }
                `}
            </style>
            <h1>Curry Maker</h1>
            <p>
            This Curry Maker application is made using creact-react-app and styled using styled components. Here, react router is also used.<br />
            <Link href="https://currymaker.vercel.app/"><button>Curry Maker</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default currymaker