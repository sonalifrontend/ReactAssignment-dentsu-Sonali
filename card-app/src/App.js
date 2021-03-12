import './App.css';
import ShowCards from './components/Card'

const CardDetails = () => {
  const cardInfo = [
  {image:"https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixid=MnwxMjA3fDB8MXx0b3BpY3x8YWV1NnJMLWo2ZXd8fHx8fDJ8fDE2MTUzNjgxMTc&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder beforeIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. final copy is available."},
  {image:"https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixid=MnwxMjA3fDB8MXx0b3BpY3x8YWV1NnJMLWo2ZXd8fHx8fDJ8fDE2MTUzNjgxMTc&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},
  {image:"https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixid=MnwxMjA3fDB8MXx0b3BpY3x8YWV1NnJMLWo2ZXd8fHx8fDJ8fDE2MTUzNjgxMTc&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder beforIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.e final copy is available."},
  {image:"https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixid=MnwxMjA3fDB8MXx0b3BpY3x8YWV1NnJMLWo2ZXd8fHx8fDJ8fDE2MTUzNjgxMTc&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},
  {image:"https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixid=MnwxMjA3fDB8MXx0b3BpY3x8YWV1NnJMLWo2ZXd8fHx8fDJ8fDE2MTUzNjgxMTc&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},
  {image:"",title:"This is my Title", info:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},
  ]

return (
    <div className="App row">  
      {cardInfo.map(ShowCards)}  
    </div>
)};


export default CardDetails;
