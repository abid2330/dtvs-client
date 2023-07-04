import { SHOW_DOCUMENTS, SHOW_DOCUMENT_ERROR } from '../actions/types';

const initialState = {
  document_loading: true,
  show_documents: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_DOCUMENTS:
      return {
        ...state,
        show_documents: payload,
        document_loading: false,
      };
    case SHOW_DOCUMENT_ERROR:
      return {
        ...state,
        show_documents: null,
        document_loading: false,
      };

    default:
      return state;
  }
}
