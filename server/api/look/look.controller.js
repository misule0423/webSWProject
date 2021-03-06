'use strict';

var _ = require('lodash');
var Look = require('./look.model');
var path = require('path');
var express = require('express');
var utils = require('../../utils/utils.js');

exports.allLooks = function(req, res) {
  Look.find({})
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.seoulLooks = function(req, res) {
  Look.find({ location: "서울" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};


exports.daeguLooks = function(req, res) {
  Look.find({ location: "대구" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};


exports.daejeonLooks = function(req, res) {
  Look.find({ location: "대전" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.gwangjuLooks = function(req, res) {
  Look.find({ location: "광주" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};


exports.busanLooks = function(req, res) {
  Look.find({ location: "부산" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.jejuLooks = function(req, res) {
  Look.find({ location: "제주" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.performanceLooks = function(req, res) {
  Look.find({ category: "문화" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.sportsLooks = function(req, res) {
  Look.find({ category: "레저" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.tripLooks = function(req, res) {
  Look.find({ category: "여행" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};

exports.medicalLooks = function(req, res) {
  Look.find({ category: "의료" })
    .sort({
      createTime: -1
    })
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      if (!looks) {
        return res.send(404);
      }
      console.log(looks);
      return res.status(200)
                     .json(looks);
    });
};


exports.userLooks = function(req, res) {
  var userEmail = req.query.email;
  Look.find({
    email: {
      $in: userEmail
    }
  })
  .sort({
    createTime: -1
  })
  .exec(function(err, looks) {
    if(err) {
      return handleError(res, err);
    }
    console.log(looks);
    return res.status(200)
                   .json(looks);
  });
};

exports.scrapeUpload = function(req, res) {
  var random = utils.randomizer(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

  utils.downloadURI(req.body.image, './client/assets/images/uploads/' + random + '.png', function(filename) {
    console.log('done');

    var newLook = new Look();
    newLook.title = req.body.title;
    newLook.image = filename.slice(9);
    newLook.email = req.body.email;
    newLook.linkURL = req.body.linkURL;
    newLook.description = req.body.description;
    newLook.userName = req.body.name;
    newLook._creator = req.body._creator;
    newLook.createTime = Date.now();
    newLook.upVotes = 0;
    newLook.save(function(err, item) {
      if (err) {
        console.log('error occured in saving post');
      } else {
        console.log('Success post saved');
        console.log(item);
        res.status(200)
          .json(item);
      }
    });
  });
}

exports.upload = function(req, res) {
  var newLook = new Look();
  var fileimage = req.middlewareStorage.fileimage;

  console.log(req.body);
  newLook.image = '/assets/images/uploads/' + fileimage;
  newLook.email = req.body.email;
  newLook.title = req.body.title;
  newLook.description = req.body.description;
  newLook.date = req.body.date;
  newLook.location = req.body.location;
  newLook.category = req.body.category;
  newLook.userName = req.body.name;
  newLook.userGravatar = req.body.gravatar;
  newLook._creator = req.body._creator;
  newLook.createTime = Date.now();
  newLook.upVotes = 0;

  newLook.save(function(err, look) {
    if(err) {
      console.log('error saving look');
      return res.send(500);
    } else {
      console.log(look);
      res.status(200)
           .send(look);
    }
  });
};

exports.singleLook = function(req, res) {
  Look.findById(req.params.lookId, function(err, look) {
    if(err) {
      return handleError(res, err);
    }
    if(!look) {
      return res.send(404);
    }
    return res.json(look);
  });
};

exports.popLooks = function(req, res) {
  Look.find(req.params.id)
    .sort('-upVotes')
    .limit(6)
    .exec(function(err, looks) {
      if (err) {
        return handleError(res, err);
      }
      console.log(looks);
      return res.json(looks);
    });
}

exports.update = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  Look.findById(req.params.id, function(err, look) {
    if(err) {
      return handleError(res, err);
      }
      if(!look) {
        return res.send(404);
      }
      var updated = _.merge(look, req.body);
      updated.save(function(err) {
        if(err) {
          return handleError(res, err);
        }
        console.log(look);
        return res.json(look);
      });
  });
};

exports.delete = function(req, res) {
  Look.findById(req.params.id, function(err, look) {
    if(err) {
      return handleError(res, err);
    }
    if(!look) {
      return res.send(404);
    }
    look.remove(function(err) {
      if(err) {
        return handleError(res, err);
      }
      return res.send(200);
    });
  });
};

exports.addView = function(req, res) {
  Look.findById(req.params.id, function(err, look) {
    if(err) {
      return handleError(res, err);
    }
    if (!look) {
      return res.send(404);
    }
    look.views++;
    look.save(function(err) {
      if (err) {
        return handle(res, err);
      }
      return res.json(look);
    });
  });
};

exports.addUpvote = function(req, res) {
  Look.findById(req.params.id, function(err, look) {
    if(err) {
      return handleError(res, err);
    }
    if(!look) {
      return res.send(404);
    }
    look.upVotes++;
    look.save(function(err) {
      if(err) {
        return handleError(res, err);
      }
      return res.json(look);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}