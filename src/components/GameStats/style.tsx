export default (
    <style>
        {`

#hltb-for-deck{
    position: relative;
}

.hltb-info {
    background: rgba(14, 20, 27, 0.25);
    position: relative;
    border-bottom: 2px solid rgba(61, 68, 80, 0.54);
    padding-top: 5px;
}

.hltb-info-clean-default {
    background: rgba(14, 20, 27, 0.5);
    position: absolute;
    border: none;
    padding-top: 0px;
    top: -40px;
    height: 40px;
    width: 100%;
}

.hltb-info-clean-default-blur {
    background: rgba(14, 20, 27, 0.5);
    backdrop-filter: blur(8px);
    position: absolute;
    border: none;
    padding-top: 0px;
    top: -60px;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.hltb-info-absolute {
    position: absolute;
    display: none;
}

.hltb-info-clean {
    background: rgba(14, 20, 27, 0.5);
    position: absolute;
    top: -55vh;
    right: 2.8vw;
    width: fit-content;
    height: fit-content;
    border: none;
}

.hltb-info-clean-left {
    right: 0px;
    left: 2.8vw;
}

.hltb-info ul {
    list-style: none;
    padding: 5px 35px;
    margin: 0px;
    display: flex;
}

.hltb-info-clean-blur ul {
    list-style: none;
    padding: 10px 35px;
    margin: 0px;
    display: flex;
}

.hltb-info-clean ul {
    display: block;
}

.hltb-info ul li {
    width: 25%;
    text-align: center;
}

.hltb-info-clean ul li {
    width: 100%;
}

.hltb-info p {
    margin: 0;
}

.hltb-gametime {
    font-size: 16px;
    font-weight: bold;
}

.hltb-info-clean .hltb-gametime {
    font-size: 20px;
    font-weight: bold;
}

.hltb-label {
    text-transform: uppercase;
    font-size: 10px;
}
.hltb-details-btn {
    background: transparent !important;
    color: #1a9fff !important;
    margin: auto !important;
    font-size: 10px !important;
    font-weight: bold !important;
    text-transform: uppercase;
    line-height: 10px !important;
}
.hltb-details-btn-clean {
    margin: auto !important;
}

.hltb-details-btn-clean-blur {
    margin: auto !important;
    line-height: 18px !important;
}

.hltb-details-btn:focus {
    color: white !important;
}
.hltb-details-btn:hover {
    color: white !important;
}
`}
    </style>
);
