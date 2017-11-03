import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import matches from 'lodash/fp/matches';
import * as API from './Api';
import * as theme from './theme';
import Nav from './Nav';
import NavItem from './NavItem';
import Show from './Show';
import { Progress, Indeterminate } from './Progress';
import { Container, Header, Logo, Shows } from './App.styles';

const FILTERS = {
  all: undefined,
  shows: { tags: ['הופעה'] },
  lectures: { tags: ['הרצאה'] },
};

class App extends PureComponent {
  state = {
    selectedNavItem: 'all',
    shows: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const shows = await API.getShows();
    this.setState({
      loading: false,
      shows,
    });
  }

  selectNavItem = selectedNavItem => {
    this.setState({ selectedNavItem });
  };

  handleFilterChange = (value, name) => {
    this.setState(state => ({
      filters: {
        ...state.filters,
        [name]: value,
      },
    }));
  };

  render() {
    const { selectedNavItem, shows, loading } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header>
            <Logo />
            <Nav selected={selectedNavItem} onSelect={this.selectNavItem}>
              <NavItem title="הכול" name="all" />
              <NavItem title="הופעות" name="shows" />
              <NavItem title="הרצאות" name="lectures" />
            </Nav>
          </Header>
          <Progress loading={loading}>
            <Indeterminate />
          </Progress>
          <Shows>{shows.filter(matches(FILTERS[selectedNavItem])).map(show => <Show key={show.id} {...show} />)}</Shows>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
