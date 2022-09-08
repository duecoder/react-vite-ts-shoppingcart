import { Button, Container, Nav, Navbar as Navig } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import './Navbar.css'

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
  <Navig sticky="top" className="bg-dark shadow-lg mb-3" style={{height: "65px"}}>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink} style={{color:"white"}}>Home</Nav.Link>
          <Nav.Link to={"/store"} as={NavLink} style={{color:"white"}}>Store</Nav.Link>
          <Nav.Link to={"/about"} as={NavLink} style={{color:"white"}}>About</Nav.Link>
        </Nav>
      {cartQuantity > 0 && (
        <Button
          className="bg-light rounded-circle"
          style={{ width: "3em", height: "3em", border: "none", position: "relative" }}
          variant="outline-primary"
          onClick={openCart}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/>
        </svg>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
        style={{ color:"white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0",
        transform: "translate(25%, 25%)"}}>{cartQuantity}</div>
        </Button>
      )}
      </Container>
  </Navig>
  )
}
