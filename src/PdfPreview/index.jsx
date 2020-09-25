import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Modal } from 'antd';
import pdfjsLib from 'pdfjs-dist';

import IconFont from '../IconFont';

import './index.less';

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.bootcss.com/pdf.js/2.4.456/pdf.worker.min.js';

let pdfDoc = null;

let pageNumPending = null;

let pageRendering = false;

// interface Iprops {
//   path: string;
//   onVisibleChange: Function;
//   visible: boolean;
// }

const Mypdf1 = props => {
  const { path, onVisibleChange, visible: visibleProps } = props;

  const canvasRef = useRef(null);

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setVisible(visibleProps);
  }, [onVisibleChange]);

  const renderPage = useCallback(
    num => {
      if (!(pdfDoc && canvasRef.current)) return;
      const canvasElement = canvasRef.current;
      pageRendering = true;
      pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        canvasElement.height = viewport.height;
        canvasElement.width = viewport.width;

        const renderContext = {
          canvasContext: canvasElement.getContext('2d'),
          viewport,
        };
        const renderTask = page.render(renderContext);
        // Wait for rendering to finish
        renderTask.promise.then(() => {
          pageRendering = false;

          if (pageNumPending !== null) {
            // New page rendering is pending
            renderPage(pageNumPending);

            pageNumPending = null;
          }
        });
      });

      // Update page counters
      setCurrentPage(num);
    },
    [pdfDoc, canvasRef, pageNumPending, scale],
  );

  /**
   * If another page rendering in progress, waits until the rendering is
   * finised. Otherwise, executes rendering immediately.
   */
  const queueRenderPage = useCallback(
    num => {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num);
      }
    },
    [pageRendering],
  );

  /**
   * Displays previous page.
   */
  const onPrevPage = useCallback(() => {
    let newcurrentPage = currentPage;
    if (newcurrentPage <= 1) {
      return;
    }
    newcurrentPage -= 1;
    setCurrentPage(newcurrentPage);

    queueRenderPage(newcurrentPage);
  }, [currentPage]);

  /**
   * Displays next page.
   */
  const onNextPage = useCallback(() => {
    let newcurrentPage = currentPage;

    if (pdfDoc !== null && newcurrentPage >= pdfDoc.numPages) {
      return;
    }
    newcurrentPage += 1;
    queueRenderPage(newcurrentPage);
  }, [pdfDoc, currentPage]);

  useEffect(() => {
    if (!path) {
      return;
    }
    const renderPdf = async () => {
      /**
       * Asynchronously downloads PDF.
       */
      pdfjsLib.getDocument(path).promise.then(pdfDocRes => {
        pdfDoc = pdfDocRes;
        setTotalPage(pdfDocRes.numPages);
        // Initial/first page rendering
        renderPage(currentPage);
      });
    };
    renderPdf();
  }, [path]);

  /* <a href={pdfPath} target='_blank' >
  <p>Click to open PDF file in a new tab</p>
</a> */

  const zoomout = useCallback(async () => {
    let newScale = scale;
    if (newScale >= 2) {
      return;
    }
    newScale += 0.1;
    await setScale(newScale);
    await queueRenderPage(currentPage);
  }, [scale, currentPage]);

  const zoomin = useCallback(async () => {
    let newScale = scale;
    if (newScale <= 0.2) {
      return;
    }
    newScale -= 0.1;
    await setScale(newScale);
    await queueRenderPage(currentPage);
  }, [scale, currentPage]);

  return (
    <>
      <Modal
        title="附件预览"
        visible={visible}
        onOk={() => {
          if (onVisibleChange) {
            onVisibleChange(false);
          } else {
            setVisible(false);
          }
        }}
        onCancel={() => {
          if (onVisibleChange) {
            onVisibleChange(false);
          } else {
            setVisible(false);
          }
        }}
        className="modalBodyStyle"
        footer={null}
        // maskClosable={false}
        width={700}
      >
        <canvas id="theCanvas" ref={canvasRef} className="theCanvas">
          你的浏览器不支持canvas
        </canvas>

        <div className="pageNumber">
          {' '}
          {currentPage} / {totalPage}
        </div>

        <div onClick={onPrevPage} className="preBtn">
          <IconFont type="iconleft_6" style={{ fontSize: 32, color: '#B1AFB0' }} />
        </div>
        <div onClick={onNextPage} className="nextBtn">
          <IconFont type="iconright_6" style={{ fontSize: 32, color: '#B1AFB0' }} />
        </div>

        <div className="scaleContainer">
          <div onClick={zoomout}>
            <IconFont type="iconic_preview_zoomout2x" style={{ fontSize: 32 }} />
          </div>
          <div className="scaleNumber">{`${(scale * 100).toFixed(0)}/100`}</div>
          <div onClick={zoomin}>
            <IconFont type="iconic_preview_enlarge2x" style={{ fontSize: 32 }} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Mypdf1;
