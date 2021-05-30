/* eslint-disable no-multi-spaces */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: ["error", "double"],        // 더블 쿼터 사용
        "quote-props": "off",
        "eol-last": "off",
        "@typescript-eslint/quotes": "off",       //더블 쿼터 사용
        "no-unused-vars": "off",        //사용 안한 변수 경고
        "spaced-comment": "off",        //주석을 뒤에 쓰지 말라는 경고
        "@typescript-eslint/no-unused-vars": "off",        //사용 안한 변수 경고
        "jsx-a11y/control-has-associated-label": "off",     //상호작용하는 엘리먼트에 label넣기
        "react/no-array-index-key": "off",      //key값으로 index를 사용할 수 있음
        "comma-dangle": "off",     //마지막에 ,를 넣어주지 않음
        "arrow-body-style": "off",      //화살표 함수 안에 return을 사용함
        "react/no-unescaped-entities": "off",       //문자열 내 " ' > } 허용
        "react/prop-types": "off",      //proptypes를 사용하지 않음
        "obejct-curly-newline": "off",      // {다음줄 바꿈을 강제로 사용 x
        "react/jsx-one-expression-per-line": "off",     // 한 라인에 여러개의 jsx를 사용할 수 있음
        "implicit-arrow-linebreak": "off",      // 화살표 함수 다음에 줄 바꿈을 사용할 수 있음
        "no-shadow": "off",         //파일 내 중복 이름 사용
        "operator-linebreak": "off",        //연산자 다음 줄바꿈 사용
        "react/react-in-jsx-scope": "off",      //jsx를 사용하여도 react를 꼭 import안해도 됨
        "react/jsx-props-no-spreading": "off",      //props를 스프레드 할 수 있음
        "jsx-a11y/anchor-is-valid": "off",      //next.js에서는 a에 href없이 사용
        "global-require": "off",        //함수 내 require사용
        "no-use-before-define": "off",      //선언전 사용X
        "import/prefer-default-export": "off",      //export default 권장
        "no-param-reassign": "off",     //param assign 하지않기
        "jsx-a11y/label-has-associated-control": "off",
        "no-invalid-css": "off",
        "no-confusing-arrow": "off",
        "react/jsx-curly-newline": "off",
        indent: "off",
        "react/jsx-indent": "off",
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".tsx"] },        // jsx사용가능 확장자 설정
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },      //import시 확장자명 사용X
        ]
    },
    "settings": {
        "import/resolver": {
            node: {
                extensions: [".js", "jsx", ".ts", ".tsx", ".d.ts"],
            }
        }
    }
};
