import React, { useEffect } from 'react';

// ${root}/app/web/component/layout.jsx 通过 webpack alias 配置 component
import Layout from '@component/layout.jsx';

import {
  getAllUserRequest,
  searchUserRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
} from '../../api/request';

function HomeIndex(props) {
  useEffect(() => {
    console.log('----componentDidMount-----');
  }, []);

  const showAllUser = () => {
    getAllUserRequest()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchUser = (id) => {
    searchUserRequest(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createUser = () => {
    createUserRequest({
      username: 'bella',
      age: 18,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateUser = (id, age) => {
    updateUserRequest(id, age)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteUser = (id) => {
    deleteUserRequest(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout title="egg-react-ssr" keywords="alice" description="easy task">
      <div className="main">
        <div className="page-container page-component">{props.message}</div>
      </div>
      <button onClick={showAllUser}>展示所有用户</button>
      <button onClick={() => searchUser(1)}>根据id搜索用户</button>
      <button onClick={createUser}>创建用户</button>
      <button onClick={() => updateUser(1, 19)}>更新用户信息</button>
      <button onClick={() => deleteUser(1)}>删除用户</button>
    </Layout>
  );
}

export default HomeIndex;
