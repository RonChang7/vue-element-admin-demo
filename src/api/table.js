import request from '@/utils/request'

export function fetchMembers(query) {
  return request({
    url: 'https://randomuser.me/api/?results=20',
    method: 'get',
    params: query
  })
}
