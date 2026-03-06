export default function initFaqAccordion() {
    const accordionContainer = document.getElementById("faqAccordion");

    const accordionData = [
        {
            title: "어떤 포지션을 희망하나요?",
            content: ["웹디자이너 및 UI 중심 프론트엔드 포지션을 희망합니다."]
        },
        {
            title: "협업 툴 경험이 있나요?",
            content: ["Figma, GitHub 사용 경험이 있습니다."]
        },
        {
            title: "주로 어떤 기술을 사용하여 작업하나요?",
            content: ["UI 디자인을 기반으로 반응형 웹 퍼블리싱 작업을 진행합니다. HTML, CSS, JavaScript를 기반으로 작업했으며 프로젝트에 따라 Vue와 UI 프레임워크를 활용해 컴포넌트 기반 구조로 웹 페이지를 구현했습니다."]
        },
        {
            title: "작업 과정은 어떻게 되나요?",
            content: ["디자인 구조를 먼저 설계한 뒤 컴포넌트를 정리하고, 이후 반응형 레이아웃과 인터랙션을 구현하는 방식으로 작업합니다. 디자인의 경우 사용자가 콘텐츠를 쉽게 이해할 수 있도록 정보 구조와 시각적 위계를 중심으로 작업합니다."]
        },
        {
            title: "어떤 프로젝트에 관심이 있나요?",
            content: ["사용자 경험을 고려한 웹사이트와 인터랙션이 있는 UI 프로젝트에 특히 관심이 있습니다."]
        },
        {
            title: "포트폴리오의 프로젝트는 어떤 방식으로 제작되었나요?",
            content: ["개인 및 팀 작업으로 진행된 프로젝트이며, 기획부터 디자인, 퍼블리싱까지 전 과정을 직접 진행했습니다."]
        },
        {
            title: "프로젝트에서 맡은 역할은 무엇인가요?",
            content: ["--"]
        },
        {
            title: "새로운 기술은 어떻게 학습하나요?",
            content: ["--"]
        },
    ]

    accordionData.forEach((item, index) => {
        const idSuffix = index + 1; // 고유 id용 숫자
        const headerId = `heading${idSuffix}`;
        const collapseId = `collapse${idSuffix}`;

        const contentHtml = item.content.map(text => `<p class="text-caption">${text}</p>`).join("");

        accordionContainer.innerHTML += `
            <div class="accordion-item faq__item">
                <h2 class="accordion-header faq__header" id="${headerId}">
                    <button class="accordion-button collapsed faq__button text-caption"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#${collapseId}"
                        aria-expanded="false"
                        aria-controls="${collapseId}"
                    >
                        <span class="faq__question">Q.</span>
                        ${item.title}
                    </button>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse faq__content"
                    aria-labelledby="${headerId}"
                >
                    <div class="accordion-body faq__body">
                    ${contentHtml}
                    </div>
                </div>
            </div>
        `;
    });
}