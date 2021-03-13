import React, {Component} from "react";
import {createMedia} from "@artsy/fresnel";
import {Button, Container, Menu, Segment, Visibility} from "semantic-ui-react";
import {Heading} from "..";

const {MediaContextProvider, Media} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export class DesktopContainer extends Component {
  public state: { fixed?: boolean } = {}

  hideFixedMenu = () => this.setState({fixed: false})
  showFixedMenu = () => this.setState({fixed: true})

  render() {
    const {children} = this.props
    const {fixed} = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical>
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>
                  Work
                </Menu.Item>
                <Menu.Item as='a'>
                  Company
                </Menu.Item>
              </Container>
            </Menu>
            <Heading/>
          </Segment>
        </Visibility>
        {children}
      </Media>
    )
  }
}
