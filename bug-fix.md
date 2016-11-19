#### bug & fix
1. 用yoman搭建react-webpack脚手架程序后,发现并不能运行npm start,提示错误
    <pre>
        npm intall 安装相关依赖,但是还是报错,最后在root下npm install才解
        决问题,具体原因不清除,可能是由于个人的系统环境混乱引起
    </pre>

2. 安装各种依赖后可以运行`npm start`, 但是浏览器报错,error如下
    <pre>
        ERROR in ./src/index.js
        Module not found: Error: Cannot resolve module 'react/lib/ReactMount' in /home/minfield/workspace/works/gallery/gallary-by-react/src
         @ ./src/index.js 1:344-375

        ERROR in ./src/components/Main.js
        Module not found: Error: Cannot resolve module 'react/lib/ReactMount' in /home/minfield/workspace/works/gallery/gallary-by-react/src/components
         @ ./src/components/Main.js 1:344-375
    </pre>

    出现这个bug的原因是react版本更新后React 15.4.0 把 ReactMount.js 移到 react-dom 下了,我用最蠢的方式解决,将react-dom下的lib文件夹下的所有文件都拷贝到
    react下的lib目录