  import React, { useEffect } from 'react';
import '../Assets/Styles/document.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../../Reusable Components/Preloader';
import { showDocuments } from '../../../Redux/actions/documentAction';

const Documents = () => {
  const dispatch = useDispatch();
  const { document_loading, show_documents } = useSelector(
    (state) => state.showdoc
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(showDocuments(id));
  }, []);
  return (
    <div className='pdf-container'>
      {document_loading === true ? (
        <Preloader />
      ) : !document ? (
        <h4>No PDF Document Available....</h4>
      ) : (
        <embed
          style={{ width: '100%', height: '100%' }}
          src={show_documents.documents}
          type='application/pdf'
        />
      )}
    </div>
  );
};

export default Documents;
