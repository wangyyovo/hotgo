import { http, jumpExport } from '@/utils/http/axios';

// 列表
export function List(params) {
  return http.request({
    url: '/test/list',
    method: 'get',
    params,
  });
}

// 删除/批量删除
export function Delete(params) {
  return http.request({
    url: '/test/delete',
    method: 'POST',
    params,
  });
}

// 新建/编辑
export function Edit(params) {
  return http.request({
    url: '/test/edit',
    method: 'POST',
    params,
  });
}

// 修改状态
export function Status(params) {
  return http.request({
    url: '/test/status',
    method: 'POST',
    params,
  });
}

// 操作开关
export function Switch(params) {
  return http.request({
    url: '/test/switch',
    method: 'POST',
    params,
  });
}

// 详情
export function View(params) {
  return http.request({
    url: '/test/view',
    method: 'GET',
    params,
  });
}

// 获取最大排序
export function MaxSort() {
  return http.request({
    url: '/test/maxSort',
    method: 'GET',
  });
}

// 导出
export function Export(params) {
  jumpExport('/test/export', params);
}
