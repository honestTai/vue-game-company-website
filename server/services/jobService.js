const {
  Job,
  JobCategory,
  CityInfo,
  Op
} = require('../models/index')

class JobService {
  async getJobFilter () {
    const jobCategory = await JobCategory.findAll({
      attributes: { exclude: ['create_time', 'update_time'] },
    })
    const cityInfo = await CityInfo.findAll({
      attributes: { exclude: ['create_time', 'update_time'] },
    })
    // 返回对象：职位类别与城市
    return {
      jobCategory: jobCategory,
      cityInfo: cityInfo
    }
  }

  // 根据查询参数获取职位列表
  async getJobList(params) {
    let whereCondition = {};

    if (params.job_category_id_list.length > 0) {
      whereCondition.job_category = params.job_category_id_list;
    }

    if (params.location_code_list.length > 0) {
      whereCondition.city = params.location_code_list;
    }

    if (params.keyword) {
      whereCondition.title = { [Op.substring]: params.keyword };
    }

    return Job.findAndCountAll({
      where: whereCondition,
      include: [{
        model: CityInfo,
        attributes: ['name', 'code']
      }, {
        model: JobCategory,
        attributes: ['name', 'en_name']
      }],
      limit: parseInt(params.pageSize),
      offset: (params.currentPage - 1) * parseInt(params.pageSize),
    });
  }
  async getJobDetail (id) {
    return Job.findOne({
      where: {
        id: id
      },
      include: [{
        model: JobCategory,
        attributes: ['name','id','parent']
      },
        {
          model: CityInfo,
          attributes: ['name','code']
        }]
    })
  }
}

module.exports = new JobService()
