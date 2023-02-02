/* eslint-disable */
import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className={styles.SideBar}>
        <img
          width="80%"
          className={styles.Logo}
          src="https://uddiyam.github.io/elk_dail_dashboard/image/logo_kw.jpg"
          alt="광운대학교 로고"
        />
        <div className={styles.Name}>웹이게이션</div>

        <div
          className={styles.ListWrap}
          onClick={() => {
            setCount(1);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 1 && "1" }}>
            성과요약1
          </span>
        </div>
        <div
          onClick={() => {
            setCount(2);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 2 && "1" }}>
            성과요약2
          </span>
        </div>
        <div
          onClick={() => {
            setCount(3);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 3 && "1" }}>
            상품상세트렌드
          </span>
        </div>
        <div
          onClick={() => {
            setCount(4);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 4 && "1" }}>
            카테고리트렌드
          </span>
        </div>
        <div
          onClick={() => {
            setCount(5);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 5 && "1" }}>
            취소/교환/반품
          </span>
        </div>
        <div
          onClick={() => {
            setCount(6);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 6 && "1" }}>
            구매고객구성1
          </span>
        </div>
        <div
          onClick={() => {
            setCount(7);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 7 && "1" }}>
            구매고객구성2
          </span>
        </div>
        <div
          onClick={() => {
            setCount(8);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 8 && "1" }}>
            고객당주문
          </span>
        </div>
        <div
          onClick={() => {
            setCount(9);
          }}
        >
          <span className={styles.List} style={{ opacity: count == 9 && "1" }}>
            vip고객분석
          </span>
        </div>
      </div>

      <div className={styles.Container}>
        {count == 1 && (
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/ea62dc70-9c8e-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
            height="700"
            width="100%"
          ></iframe>
        )}
      </div>
      {count == 2 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/af7dd580-970a-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-10y%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}

      {count == 3 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/1ad3c1f0-9c9c-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}

      {count == 4 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/79c15390-970f-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-5M%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}
      {count == 5 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/e4448de0-9796-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}
      {count == 6 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/90620400-9c9b-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-10y%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}
      {count == 7 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/bcdc1730-9c84-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-10y%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}

      {count == 8 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/a7a13fa0-9c9b-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}

      {count == 9 && (
        <div className={styles.Container}>
          <iframe
            src="https://kwhcclab.com:20454/app/dashboards#/view/bbe75f80-9c9b-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-time-filter=true"
            height="700"
            width="100%"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
