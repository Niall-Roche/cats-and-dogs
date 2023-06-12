import {node, string} from 'prop-types'
import {styled} from 'styled-components'
import {screenMd} from '../../styles/mixins/screens'

// Show a grid with a max of 5 columns.
// The number of rows are calculated from the current page total divided by 5 and rounded down.
const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 150px);
  grid-template-rows: ${props => `repeat(${Math.floor(props?.$total / 5)}, 150px)`};
  grid-auto-flow: column;
  ${screenMd({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`

const propTypes = {
  children: node,
  className: string,
  total: Number,
}

const defaultProps = {
  children: null,
  className: '',
  total: 0,
}

const Grid = ({children, className, total}) => {
  return (
    <GridContainer className={className} $total={total}>
      {children}
    </GridContainer>
  )
}

Grid.propTypes = propTypes
Grid.defaultProps = defaultProps

export default Grid