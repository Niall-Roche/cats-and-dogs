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

    .flex-row {
        flex-direction: row;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }

    .ms-auto {
        margin-left: auto;
    }
`

export default Utilities