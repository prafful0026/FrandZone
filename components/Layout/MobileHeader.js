import React from "react";
import { Menu, Container, Icon, Dropdown } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { logoutUser } from "../../utils/authUser";

function MobileHeader({ user: { unreadNotification, email, unreadMessage, username } }) {
  const router = useRouter();
  const isActive = route => router.pathname === route;

  return (
    <>
      <Menu fluid borderless >
        <Container text>
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <Link href="/">
            <Menu.Item header active={isActive("/")}>
              <Icon name="rss" size="small" />
            </Menu.Item>
          </Link>
   <Link href={`/${username}`}>
                <Dropdown.Item active={isActive(`/${username}`)}>
                  <Icon name="user" size="small" />
                </Dropdown.Item>
              </Link>

              <Link href="/search">
                <Dropdown.Item active={isActive("/search")}>
                  <Icon name="search" size="small" />
                </Dropdown.Item>
              </Link>
              <Dropdown.Item onClick={() => logoutUser(email)}>
                <Icon name="sign out alternate" size="small" /> 
              </Dropdown.Item>
            </div>
         
        </Container>
      </Menu>
    </>
  );
}

export default MobileHeader;