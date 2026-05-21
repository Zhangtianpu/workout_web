const aerobicData = {
    running: {
        name: '跑步训练',
        bvid: 'BV1SZ42187A3',
        tips: ['从慢跑开始，逐渐提高速度', '保持呼吸节奏，两步一吸两步一呼', '每周3-4次，每次20-30分钟']
    },
    jumping: {
        name: '跳绳训练',
        bvid: 'BV1Rv411E7dN',
        tips: ['选择合适长度的跳绳', '手腕发力，不要用肩膀', '每组1-2分钟，休息30秒']
    },
    hiit: {
        name: 'HIIT高强度间歇',
        bvid: 'BV1cT411d9XH',
        tips: ['运动20秒休息10秒', '选择基础动作', '每组4-8个动作']
    }
};

const functionalData = {
    jump: {
        name: '弹跳力训练',
        bvid: 'BV1mT411i3YL',
        tips: ['深蹲跳是基础动作', '注意落地缓冲', '每组8-12次，做3组']
    },
    endurance: {
        name: '耐力训练',
        bvid: 'BV1pT411k5YM',
        tips: ['平板支撑提高核心耐力', '从30秒开始逐渐增加', '保持身体成直线']
    },
    reaction: {
        name: '反应力训练',
        bvid: 'BV1rT411m7YN',
        tips: ['敏捷梯训练脚步', '折返跑提高反应', '注意快速变向']
    },
    coordination: {
        name: '协调性训练',
        bvid: 'BV1tT411o9YP',
        tips: ['波比跳全身协调', '熊爬锻炼手脚协调', '注意动作流畅']
    },
    explosive: {
        name: '爆发力训练',
        bvid: 'BV1vT411q1YQ',
        tips: ['跳蹲训练爆发力', '药球投掷', '注意快速发力']
    }
};

const videoData = {
    male: {
        bodyweight: {
            chest: {
                name: '胸部训练（自重）',
                bvid: 'BV1ir4y1Z7W2',
                tips: ['俯卧撑是基础动作，注意保持身体直线', '下降时吸气，推起时呼气', '每组8-12次，做3-4组']
            },
            back: {
                name: '背部训练（自重）',
                bvid: 'BV1gT411c7ZH',
                tips: ['引体向上是最佳背部动作', '注意肩胛骨后缩下沉', '感受背阔肌发力']
            },
            shoulders: {
                name: '肩部训练（自重）',
                bvid: 'BV1iT411e9YJ',
                tips: ['折刀俯卧撑锻炼三角肌', '臀部抬高成倒V字', '保持核心稳定']
            },
            arms: {
                name: '手臂训练（自重）',
                bvid: 'BV1kT411g1YK',
                tips: ['窄距俯卧撑锻炼三头肌', '双手距离与肩同宽', '大臂贴近身体']
            },
            legs: {
                name: '腿部训练（自重）',
                bvid: 'BV1cT411d9XH',
                tips: ['深蹲注意膝盖方向与脚尖一致', '核心收紧，背部挺直', '下蹲至大腿平行地面']
            },
            abs: {
                name: '腹部训练（自重）',
                bvid: 'BV1uA411p7Nh',
                tips: ['卷腹注意下背部贴地', '呼气时卷起', '不要用手拉头']
            }
        },
        dumbbell: {
            chest: {
                name: '胸部训练（哑铃）',
                bvid: 'BV1pT411k5YM',
                tips: ['哑铃卧推注意手腕中立', '下降至胸部两侧', '感受胸肌拉伸']
            },
            back: {
                name: '背部训练（哑铃）',
                bvid: 'BV1rT411m7YN',
                tips: ['单臂划船注意核心稳定', '肘部贴近身体', '顶峰收缩']
            },
            shoulders: {
                name: '肩部训练（哑铃）',
                bvid: 'BV1tT411o9YP',
                tips: ['哑铃推举注意核心收紧', '手腕保持中立', '不要过度后仰']
            },
            arms: {
                name: '手臂训练（哑铃）',
                bvid: 'BV1vT411q1YQ',
                tips: ['哑铃弯举注意大臂固定', '不要晃动借力', '顶峰收缩']
            },
            legs: {
                name: '腿部训练（哑铃）',
                bvid: 'BV1xT411s3YR',
                tips: ['哑铃深蹲注意膝盖方向', '核心收紧', '保持背部挺直']
            },
            abs: {
                name: '腹部训练（哑铃）',
                bvid: 'BV1zT411u5YS',
                tips: ['负重卷腹增加阻力', '注意下背部贴地', '控制速度']
            }
        },
        barbell: {
            chest: {
                name: '胸部训练（杠铃）',
                bvid: 'BV1BT411w7YT',
                tips: ['杠铃卧推是经典动作', '握距略宽于肩', '下放至胸部']
            },
            back: {
                name: '背部训练（杠铃）',
                bvid: 'BV1DT411y9YU',
                tips: ['杠铃划船注意背部角度', '肘部贴近身体', '顶峰收缩']
            },
            shoulders: {
                name: '肩部训练（杠铃）',
                bvid: 'BV1FT412a1YV',
                tips: ['颈前推举更安全', '核心收紧', '不要过度后仰']
            },
            arms: {
                name: '手臂训练（杠铃）',
                bvid: 'BV1HT412c3YW',
                tips: ['杠铃弯举注意大臂固定', '不要晃动身体', '控制离心']
            },
            legs: {
                name: '腿部训练（杠铃）',
                bvid: 'BV1JT412e5YX',
                tips: ['杠铃深蹲是腿部训练之王', '高杠位更适合初学者', '注意膝盖方向']
            },
            abs: {
                name: '腹部训练（杠铃）',
                bvid: 'BV1LT412g7YY',
                tips: ['杠铃卷腹增加阻力', '注意下背部贴地', '控制速度']
            }
        },
        band: {
            chest: {
                name: '胸部训练（弹力带）',
                bvid: 'BV1NT412i9YZ',
                tips: ['弹力带俯卧撑增加阻力', '注意弹力带位置', '保持张力']
            },
            back: {
                name: '背部训练（弹力带）',
                bvid: 'BV1PT412k1ZA',
                tips: ['弹力带划船注意肩胛骨后缩', '保持张力', '顶峰收缩']
            },
            shoulders: {
                name: '肩部训练（弹力带）',
                bvid: 'BV1RT412m3ZB',
                tips: ['弹力带侧平举注意不要耸肩', '小拇指略高', '感受中束发力']
            },
            arms: {
                name: '手臂训练（弹力带）',
                bvid: 'BV1TT412o5ZC',
                tips: ['弹力带弯举便携有效', '踩住弹力带调整张力', '大臂固定']
            },
            legs: {
                name: '腿部训练（弹力带）',
                bvid: 'BV1VT412q7ZD',
                tips: ['弹力带深蹲增加阻力', '弹力带置于肩上', '注意安全']
            },
            abs: {
                name: '腹部训练（弹力带）',
                bvid: 'BV1XT412s9ZE',
                tips: ['弹力带卷腹增加阻力', '注意下背部贴地', '控制速度']
            }
        }
    },
    female: {
        bodyweight: {
            chest: {
                name: '胸部训练（自重·女性）',
                bvid: 'BV1ZT412u1ZF',
                tips: ['跪姿俯卧撑适合女性初学者', '膝盖着地减少负重', '保持核心收紧']
            },
            back: {
                name: '背部训练（自重·女性）',
                bvid: 'BV13T412w3ZG',
                tips: ['超人式锻炼背部', '同时抬起手臂和腿', '保持2-3秒']
            },
            shoulders: {
                name: '肩部训练（自重·女性）',
                bvid: 'BV15T412y5ZH',
                tips: ['折刀俯卧撑塑造肩部线条', '臀部抬高', '减轻腰部压力']
            },
            arms: {
                name: '手臂训练（自重·女性）',
                bvid: 'BV17T413a7ZI',
                tips: ['墙壁俯卧撑锻炼手臂', '适合初学者', '逐渐增加难度']
            },
            legs: {
                name: '腿部训练（自重·女性）',
                bvid: 'BV19T413c9ZJ',
                tips: ['相扑深蹲塑造臀腿线条', '双脚宽距站立', '膝盖与脚尖方向一致']
            },
            abs: {
                name: '腹部训练（自重·女性）',
                bvid: 'BV1BT413e1ZK',
                tips: ['平板支撑收紧核心', '注意不要塌腰', '保持呼吸均匀']
            }
        },
        dumbbell: {
            chest: {
                name: '胸部训练（哑铃·女性）',
                bvid: 'BV1DT413g3ZL',
                tips: ['哑铃卧推塑造胸型', '选择合适重量', '注意手腕位置']
            },
            back: {
                name: '背部训练（哑铃·女性）',
                bvid: 'BV1FT413i5ZM',
                tips: ['单臂哑铃划船', '改善体态', '塑造背部线条']
            },
            shoulders: {
                name: '肩部训练（哑铃·女性）',
                bvid: 'BV1HT413k7ZN',
                tips: ['哑铃侧平举塑造肩部线条', '小重量多次数', '不要耸肩']
            },
            arms: {
                name: '手臂训练（哑铃·女性）',
                bvid: 'BV1JT413m9ZO',
                tips: ['哑铃弯举紧致手臂', '小重量多次数', '大臂固定']
            },
            legs: {
                name: '腿部训练（哑铃·女性）',
                bvid: 'BV1LT413o1ZP',
                tips: ['哑铃臀推塑造臀部曲线', '顶峰挤压臀部', '感受臀大肌发力']
            },
            abs: {
                name: '腹部训练（哑铃·女性）',
                bvid: 'BV1NT413q3ZQ',
                tips: ['哑铃侧弯锻炼腰侧', '注意不要过度负重', '控制幅度']
            }
        },
        barbell: {
            chest: {
                name: '胸部训练（杠铃·女性）',
                bvid: 'BV1PT413s5ZR',
                tips: ['空杆卧推学习动作', '注意握距和手腕', '逐渐增加重量']
            },
            back: {
                name: '背部训练（杠铃·女性）',
                bvid: 'BV1RT413u7ZS',
                tips: ['杠铃划船改善体态', '注意背部角度', '肘部贴近身体']
            },
            shoulders: {
                name: '肩部训练（杠铃·女性）',
                bvid: 'BV1TT413w9ZT',
                tips: ['颈前推举塑造肩部', '核心收紧', '控制重量']
            },
            arms: {
                name: '手臂训练（杠铃·女性）',
                bvid: 'BV1VT413y1ZU',
                tips: ['曲杆弯举保护手腕', '大臂固定', '控制速度']
            },
            legs: {
                name: '腿部训练（杠铃·女性）',
                bvid: 'BV1XT414a3ZV',
                tips: ['高杠深蹲塑造臀腿', '注意膝盖方向', '核心收紧']
            },
            abs: {
                name: '腹部训练（杠铃·女性）',
                bvid: 'BV1ZT414c5ZW',
                tips: ['杠铃片卷腹增加阻力', '注意下背部贴地', '控制速度']
            }
        },
        band: {
            chest: {
                name: '胸部训练（弹力带·女性）',
                bvid: 'BV13T414e7ZX',
                tips: ['弹力带跪姿俯卧撑', '适合居家训练', '逐渐增加难度']
            },
            back: {
                name: '背部训练（弹力带·女性）',
                bvid: 'BV15T414g9ZY',
                tips: ['弹力带划船改善体态', '肩胛骨后缩', '感受背部发力']
            },
            shoulders: {
                name: '肩部训练（弹力带·女性）',
                bvid: 'BV17T414i1ZZ',
                tips: ['弹力带侧平举塑造肩部', '小重量多次数', '不要耸肩']
            },
            arms: {
                name: '手臂训练（弹力带·女性）',
                bvid: 'BV19T414k3A1',
                tips: ['弹力带弯举紧致手臂', '便携有效', '大臂固定']
            },
            legs: {
                name: '腿部训练（弹力带·女性）',
                bvid: 'BV1BT414m5A2',
                tips: ['弹力带臀桥激活臀部', '顶峰挤压', '感受臀大肌']
            },
            abs: {
                name: '腹部训练（弹力带·女性）',
                bvid: 'BV1DT414o7A3',
                tips: ['弹力带卷腹增加阻力', '注意下背部贴地', '控制速度']
            }
        }
    }
};

const equipmentNames = {
    bodyweight: '自重',
    dumbbell: '哑铃',
    barbell: '杠铃',
    band: '弹力带'
};

const partNames = {
    chest: '胸部',
    back: '背部',
    shoulders: '肩部',
    arms: '手臂',
    legs: '腿部',
    abs: '腹部'
};

const aerobicNames = {
    running: '跑步',
    jumping: '跳绳',
    hiit: 'HIIT'
};

const functionalNames = {
    jump: '弹跳力',
    endurance: '耐力',
    reaction: '反应力',
    coordination: '协调性',
    explosive: '爆发力'
};
