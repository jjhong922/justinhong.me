import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/Logo"
import CV from "assets/docs/cv.pdf"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 1em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 100%;
      border-bottom: 2px dotted transparent;
      bottom: 24px;
      right: 0%;
      transition: 100ms ease-in-out border-color;
    }

    &:hover {
      &:after {
        border-color: ${colors.grey900};
        transition: 100ms ease-in-out border-color;
      }
    }

    &.Link--is-active {
      &:after {
        border-color: ${colors.grey900};
        transition: 100ms ease-in-out border-color;
      }
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/publications">
          Publications
        </Link>
        <a href={CV}>CV</a>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
