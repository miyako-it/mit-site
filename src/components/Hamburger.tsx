import React from 'react'
import {
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/core"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FiAlignRight } from "react-icons/fi"

export const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        display={{ sm: "inline-flex", md: "none" }}
        aria-label="メニューを開く"
        fontSize="32px"
        ref={btnRef}
        onClick={onOpen}
        icon={FiAlignRight}
        variant="ghost"
        color="current"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent background="rgba(255,255,255,0.9)">
          <DrawerCloseButton />
          <DrawerBody py="16" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
            <AniLink
              className="font-serif underline_center"
              fade
              to="/"
            >
              <Text fontSize="3xl">Home</Text>
            </AniLink>
            <AniLink
              className="font-serif underline_center"
              fade
              to="/about"
            >
              <Text fontSize="3xl">About</Text>
            </AniLink>
            <AniLink
              className="font-serif underline_center"
              fade
              to="/events"
            >
              <Text fontSize="3xl">Events</Text>
            </AniLink>
            <AniLink
              className="font-serif underline_center"
              fade
              to="/blogs"
            >
              <Text fontSize="3xl">Blogs</Text>
            </AniLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Hamburger
