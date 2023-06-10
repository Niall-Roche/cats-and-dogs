import {createGlobalStyle} from 'styled-components'

const Utilities = createGlobalStyle`
    .align-items-center {
        align-items: center;
    }

    .d-flex {
        display: flex;
    }

    .d-none {
        display: none;
    }

    .flex-col {
        flex-direction: column;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }
`

export default Utilities