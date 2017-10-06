import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import matches from 'lodash/fp/matches';
import * as API from './Api';
import * as theme from './theme';
// import FilterItem from './FilterItem';
import Nav from './Nav';
import NavItem from './NavItem';
import Show from './Show';
import { Progress, Indeterminate } from './Progress';
import { Container, Header, Logo, /* Filters , */ Shows } from './App.styles';

const FILTERS = {
  all: undefined,
  shows: { tags: ['הופעה'] },
  lectures: { tags: ['הרצאה'] },
};

// const TODAY = new Date();

// const AREA_OPTIONS = [
//   {
//     label: 'כולם',
//     value: null,
//   },
//   {
//     value: 'tlv',
//     label: 'תל אביב',
//   },
//   {
//     value: 'north',
//     label: 'הצפון',
//   },
//   {
//     value: 'south',
//     label: 'הדרום',
//   },
// ];

// const REQUIRED_REGISTRATION_OPTIONS = [
//   {
//     label: 'לא בהכרח',
//     value: null,
//   },
//   {
//     label: 'כן',
//     value: true,
//   },
//   {
//     label: 'לא',
//     value: false,
//   },
// ];

// const PRICE_OPTIONS = [
//   {
//     label: 'כל מחיר',
//     value: null,
//   },
//   {
//     label: 'חינם',
//     value: 0,
//   },
//   {
//     label: 'עד 20',
//     value: 20,
//   },
//   {
//     label: 'עד 50',
//     value: 50,
//   },
// ];

class App extends PureComponent {
  state = {
    selectedNavItem: 'all',
    filters: {
      area: null,
      price: null,
      date: null,
      requiresRegistration: null,
    },
    shows: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const shows = await API.getShows();
    console.log(shows);
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
    const { selectedNavItem, /* filters, */ shows, loading } = this.state;
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
            {/* <Filters>
              <FilterItem
                type="select"
                label="אזור"
                name="area"
                value={filters.area}
                onChange={this.handleFilterChange}
                options={AREA_OPTIONS}
              />
              <FilterItem
                type="select"
                label="מחיר"
                name="price"
                value={filters.price}
                onChange={this.handleFilterChange}
                options={PRICE_OPTIONS}
              />
              <FilterItem
                type="date"
                label="תאריך"
                name="date"
                value={filters.date}
                onChange={this.handleFilterChange}
                minDate={TODAY}
                maxDate={null}
              />
              <FilterItem
                type="select"
                label="רישום מראש"
                name="requiresRegistration"
                value={filters.requiresRegistration}
                onChange={this.handleFilterChange}
                options={REQUIRED_REGISTRATION_OPTIONS}
              />
            </Filters> */}
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
