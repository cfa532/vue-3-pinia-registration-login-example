interface Window {
    mmInfo: any       // add to window obj for testing convenience
    getParam: any
    hprose: any
}

interface ScorePair {
    score: number
    member: string
}
interface FVPair {
    field: string
    value: any
}
interface FileInfo {
    name: string
    lastModified: number
    size: number
    type: string
    // macid:string
    mid: string      // mimei ID associated with the File
    caption: string   // Displayed in File List view
}

type ContentColumn = {
    title: string
    titleZh: string
    orderBy?: number
    link?: string
    subColumn?: ContentColumn[]
}

type PulledMessage = {
    tm: string      //消息发生的时间
    from: string
    to: string
    appID?: string      //空表示系统消息
    msg: string      //表示命令，是由appid约定的，如果appid为空，则是系统消息?
    sign?: string      //发送者签名
    data?: any       //应用自定义的数据格式
    //如果考虑消息的自净，应当加入一个消息的有效期，到期自动删除
}
type DhtReply = {
    dhtName: string
    info: string
}

