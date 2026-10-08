const config={
    enable:false, //是否开启七牛
    accessKey:'CHANGE_ME_BEFORE_RUNNING',
    secretKey:'CHANGE_ME_BEFORE_RUNNING',
    bucket:'arthurzt', //存储桶名称
    cdn:'saaaavyds.hd-bkt.clouddn.com', //七牛配置的域名，七牛配置的测试域名只能使用一个月，记得配！
    zone:'z2',
    rootPath:'company',//存储的根路径
    size:4, //最大文件大小，不得大于4M(单位M)
    useHttps:true, //是否启用https
    useCdnDomains:false //是否启用cdn上传加速
}

module.exports=config;
