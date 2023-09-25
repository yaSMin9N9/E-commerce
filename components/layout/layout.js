import MainHeader from "./mainHeader";

export default function Layout(props) {
  
  return (
    
    <>
    <MainHeader/>
    <main >{props.children}</main>
    </>
  )
}
