import React, { useContext, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';
import Header from '../../components/Header';

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/block-library/build-style/theme.css';

// import { registerCoreBlocks } from '@wordpress/block-library';

// registerCoreBlocks();

import './overridden.scss';

import { StoreContext } from '../../store/reducer';
import {
  getTestAnnouncementDetail,
  getAnnouncementDetail,
} from '../../store/actions';

const Announcement = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    if (id === 'test') {
      getTestAnnouncementDetail(dispatch);
    } else {
      getAnnouncementDetail(dispatch, { id });
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        {id !== 'test' && (
          <Fragment>
            <h1>{state.announcementDetail?.title?.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: state.announcementDetail?.content?.rendered,
              }}
            />
          </Fragment>
        )}
        {id === 'test' && (
          <Fragment>
            <h1>{state.announcementDetail?.projects?.[0]?.title}</h1>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

// const ExampleHTML = () => {
//   return '\n<ul><li><strong><span class="has-inline-color has-vivid-red-color">面試時間表經公告後不予調整順序。</span></strong></li><li><strong><span class="has-inline-color has-vivid-red-color">考生報到及應試時請自備並全程配戴口罩</span>，及配合量測體溫(請預估提早到校時間)。監試人員查核身分時請配合取下口罩查驗。<span class="has-inline-color has-vivid-red-color">考生休息室僅開放考生入場，不開放陪考，非考生請勿進入本校館舍。</span></strong></li><li><strong><span class="has-inline-color has-vivid-red-color">考生應主動通報旅遊史。考生如有發燒或咳嗽等呼吸道症狀，應主動告知監試人員。</span>考生如自疾管署公告之相關國家或地區返國，請配合政府秋冬防疫專案政策。<span class="has-inline-color has-vivid-red-color">中央流行疫情指揮中心規定之居家檢疫、居家隔離、自主健康管理期間者請勿到校應考</span></strong>。</li><li><strong>報到時間、地點：110年2月21日（星期日）上午8時40分起</strong>，於本校科學館5樓501室報到。至遲須於面試叫號前完成報到，<strong>逾時不受理報到，未辦理報到視同放棄面試資格</strong>。</li><li><strong>繳交（驗）證件：<span class="has-inline-color has-vivid-red-color">准考證</span>及<span class="has-inline-color has-vivid-red-color">國民身分證正本</span></strong>（或有效期限內附照片之駕照、護照等政府核發之證明文件）<strong>。</strong><br><strong>（網路列印准考證請參閱簡章第31頁，<span class="has-inline-color has-vivid-red-color">注意：考場不提供列印准考證服務</span>）</strong></li><li>面試相關說明：<br>1.<strong>面試時間：110年2月21日（星期日）上午9時整開始。</strong><br>2.<strong><span class="has-inline-color has-vivid-red-color">請於面試前30分鐘提早至考場等候</span>，面試前叫號三次不到者，視同放棄面試資格</strong>。每人面試時間以10分鐘為原則，包含器材設置準備時間、面試者自我簡介與報告、面試委員詢答，詢答時間得視實際情況延長或縮短。<br>3.面試場地提供Windows作業系統之數位設備，如攜帶ios系統設備者(如ipad平板電腦、Mac筆電等)，請自備相關轉接頭及連接線。<br>4.為不影響其他考生之權益，<strong><span class="has-inline-color has-vivid-red-color">禁止在考場範圍內隨意走動，並請於面試完畢後依照現場服務人員指示立即離開試場，切勿返回休息區</span></strong>。</li><li>考場及休息區內皆<strong>禁止飲食</strong>。</li><li>攜帶電子通訊用品（含行動電話、呼叫器或具通訊功能之任何電子用品）請務必關機。</li></ul>\n\n\n\n<div class="wp-block-file"><a href="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/1100219.pdf">110在職招生面試時間表</a><a href="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/1100219.pdf" class="wp-block-file__button" download>下載</a></div>\n';
// };

// const ExampleHTML2 = () => {
//   return '\n<p>競賽名稱：2020高雄邁客盃運算思維與創意設計大賽</p>\n\n\n\n<p>得獎名次：年度優勝</p>\n\n\n\n<p>參賽學生：陳貫軒、劉芳語、李侑璇、徐楚寧</p>\n\n\n\n<p>作品名稱：憶曲</p>\n\n\n\n<p>指導老師：盧姝如</p>\n\n\n\n<p>相關網址：</p>\n\n\n\n<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">\nhttps://news.sina.com.tw/article/20201214/37142790.html\n</div></figure>\n\n\n\n<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/103551821060127/posts/432395794842393/?d=n\n</div></figure>\n\n\n\n<figure class="wp-block-gallery columns-2 is-cropped"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img loading="lazy" width="813" height="212" src="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1.jpg" alt="" data-id="3829" data-full-url="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1.jpg" data-link="https://dtd.ntue.edu.tw/?attachment_id=3829" class="wp-image-3829" srcset="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1.jpg 813w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1-300x78.jpg 300w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1-260x68.jpg 260w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1-50x13.jpg 50w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup1-150x39.jpg 150w" sizes="(max-width: 813px) 100vw, 813px" /></figure></li><li class="blocks-gallery-item"><figure><img loading="lazy" width="899" height="954" src="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2.jpg" alt="" data-id="3830" data-full-url="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2.jpg" data-link="https://dtd.ntue.edu.tw/?attachment_id=3830" class="wp-image-3830" srcset="https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2.jpg 899w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2-283x300.jpg 283w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2-138x146.jpg 138w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2-47x50.jpg 47w, https://dtd.ntue.edu.tw/wp-content/uploads/2021/02/2020mcup2-71x75.jpg 71w" sizes="(max-width: 899px) 100vw, 899px" /></figure></li></ul></figure>\n';
// };

// ELEMENT BACKUP
/* 
      <div className="post-wrapper-content">
        <div className="section the_content has_content">
          <div className="section_wrapper">
            <div
              dangerouslySetInnerHTML={{ __html: ExampleHTML() }}
              className="the_content_wrapper"
            ></div>
          </div>
        </div>
      </div> 
*/

export default Announcement;
