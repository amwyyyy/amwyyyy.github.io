> 只读故障恢复（FORBIDDEN/12/index read-only）

```
PUT _all/_settings
{
  "index": {
    "blocks": {
      "read_only_allow_delete": "false"
    }
  }
}


curl --request PUT \
  --url http://10.90.193.226:9200/_all/_settings \
  --header 'content-type: application/json' \
  --data '{
  "index": {
    "blocks": {
      "read_only_allow_delete": "false"
    }
  }
}'
```

> 删除index

```
DELETE /sw60_*

curl --request DELETE --url 'http://10.90.193.226:9200/sw60_*'
```

> 查看别名指向的index

```
GET /*/_alias/<index alias>
```

> alias异常，是一个别名指向了多个index，skywalking出现此问题的原因是es由于存储空间问题，没有把老index删除。
>
> 解决方法，删除多的index
>
> {"error":{"root_cause":[{"type":"illegal_argument_exception","reason":"Alias [skywalking_profile_task] has more than one indices associated with it [[skywalking_profile_task-20200603, skywalking_profile_task-20200608]], can't execute a single index op"}],"type":"illegal_argument_exception","reason":"Alias [skywalking_profile_task] has more than one indices associated with it [[skywalking_profile_task-20200603, skywalking_profile_task-20200608]], can't execute a single index op"},"status":400}